import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Measurement, MeasurementDocument } from "./schema/measurement.schema";
import { CreateMeasurementDto } from "./dto/create-measurement.dto";

@Injectable()
export class MeasurementService {
  constructor(
    @InjectModel(Measurement.name)
    private measurementModel: Model<MeasurementDocument>
  ) {}

  async create(createMeasurementDto: CreateMeasurementDto) {
    try {
      const measurement = new this.measurementModel(createMeasurementDto);
      const saved = await measurement.save();
      return {
        success: true,
        message: "✅ Measurement created successfully",
        data: saved,
      };
    } catch (error) {
      return {
        success: false,
        message: `❌ Failed to create measurement: ${error.message}`,
      };
    }
  }

  async findAll() {
    try {
      const measurements = await this.measurementModel
        .find()
        .populate("customerId", "name email phone")
        .exec();

      return {
        success: true,
        message: "✅ Measurements fetched successfully",
        data: measurements,
      };
    } catch (error) {
      return {
        success: false,
        message: `❌ Failed to fetch measurements: ${error.message}`,
      };
    }
  }

  async findOne(id: string) {
    try {
      const measurement = await this.measurementModel
        .findById(id)
        .populate("customerId", "name email phone")
        .exec();

      if (!measurement) {
        return {
          success: false,
          message: `❌ Measurement with ID ${id} not found`,
        };
      }

      return {
        success: true,
        message: "✅ Measurement fetched successfully",
        data: measurement,
      };
    } catch (error) {
      return {
        success: false,
        message: `❌ Failed to fetch measurement: ${error.message}`,
      };
    }
  }

  async findByCustomer(customerId: string) {
    try {
      const measurements = await this.measurementModel
        .find({ customerId })
        .populate("customerId", "name email phone")
        .exec();

      return {
        success: true,
        message: "✅ Customer measurements fetched successfully",
        data: measurements,
      };
    } catch (error) {
      return {
        success: false,
        message: `❌ Failed to fetch customer measurements: ${error.message}`,
      };
    }
  }

  async remove(id: string) {
    try {
      const result = await this.measurementModel.findByIdAndDelete(id).exec();

      if (!result) {
        return {
          success: false,
          message: `❌ Measurement with ID ${id} not found`,
        };
      }

      return {
        success: true,
        message: "✅ Measurement deleted successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: `❌ Failed to delete measurement: ${error.message}`,
      };
    }
  }
}
