"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const customers_data_1 = require("./customers.data");
let CustomersService = class CustomersService {
    constructor() {
        this.customers = customers_data_1.Customers;
    }
    get(id) {
        return this.customers.find(customer => customer.id === id);
    }
    getAll() {
        return this.customers;
    }
    createCustomer(name, merchantId) {
        let newCustomerId = Math.max(...this.customers.map(customer => parseInt(customer.id))) + 1;
        let newCustomer = {
            id: newCustomerId.toString(),
            name: name,
            merchantId: merchantId
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }
};
CustomersService = __decorate([
    common_1.Injectable()
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map