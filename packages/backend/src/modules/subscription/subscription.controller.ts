import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { CreateSubscriptionDto, GetSubscriptionMetadataDto, ParseSubscriptionDto } from './subscription.dto';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get('list')
  async listSubscriptions() {
    return this.subscriptionService.listSubscriptions();
  }

  @Post('create')
  async addSubscription(@Body() body: CreateSubscriptionDto) {
    return this.subscriptionService.addSubscription(body);
  }

  @Get('parse')
  async parseSubscription(@Query() query: ParseSubscriptionDto) {
    return this.subscriptionService.parseSubscription(query);
  }

  @Get('metadata')
  async getSubscriptionMetadata(@Query() query: GetSubscriptionMetadataDto) {
    return this.subscriptionService.getSubscriptionMetadata(query);
  }
}
