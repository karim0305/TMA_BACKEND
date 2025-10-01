import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from "@nestjs/common";
import { MeasurementService } from "./measurement.service";
import { CreateMeasurementDto } from "./dto/create-measurement.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from "@nestjs/swagger";

@ApiTags("Measurements") // Group name in Swagger UI
@Controller("measurements")
export class MeasurementController {
  constructor(private readonly measurementService: MeasurementService) {}

  @Post()
  @ApiOperation({ summary: "Create a new measurement" })
  @ApiBody({ type: CreateMeasurementDto })
  @ApiResponse({ status: 201, description: "Measurement created successfully" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async create(@Body() createMeasurementDto: CreateMeasurementDto) {
    return this.measurementService.create(createMeasurementDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all measurements" })
  @ApiResponse({ status: 200, description: "List of measurements" })
  async findAll() {
    return this.measurementService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get measurement by ID" })
  @ApiParam({ name: "id", type: String, description: "Measurement ID" })
  @ApiResponse({ status: 200, description: "Measurement found" })
  @ApiResponse({ status: 404, description: "Measurement not found" })
  async findOne(@Param("id") id: string) {
    return this.measurementService.findOne(id);
  }

  @Get("customer/:customerId")
  @ApiOperation({ summary: "Get measurements by customer ID" })
  @ApiParam({ name: "customerId", type: String, description: "Customer ID (User ObjectId)" })
  @ApiResponse({ status: 200, description: "List of measurements for customer" })
  async findByCustomer(@Param("customerId") customerId: string) {
    return this.measurementService.findByCustomer(customerId);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete measurement by ID" })
  @ApiParam({ name: "id", type: String, description: "Measurement ID" })
  @ApiResponse({ status: 200, description: "Measurement deleted successfully" })
  @ApiResponse({ status: 404, description: "Measurement not found" })
  async remove(@Param("id") id: string) {
    return this.measurementService.remove(id);
  }
}
