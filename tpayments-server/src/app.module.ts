import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { MerchantsModule } from './merchants/merchants.module';

@Module({
  imports: [CustomersModule, MerchantsModule]
})
export class AppModule {}
