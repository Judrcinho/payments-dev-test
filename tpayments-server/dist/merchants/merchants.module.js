"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantsModule = void 0;
const common_1 = require("@nestjs/common");
const merchants_service_1 = require("./merchants.service");
const merchants_controller_1 = require("./merchants.controller");
let MerchantsModule = class MerchantsModule {
};
MerchantsModule = __decorate([
    common_1.Module({
        controllers: [merchants_controller_1.MerchantsController],
        providers: [merchants_service_1.MerchantsService]
    })
], MerchantsModule);
exports.MerchantsModule = MerchantsModule;
//# sourceMappingURL=merchants.module.js.map