"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantsService = void 0;
const common_1 = require("@nestjs/common");
const merchants_data_1 = require("./merchants.data");
let MerchantsService = class MerchantsService {
    constructor() {
        this.merchants = merchants_data_1.Merchants;
    }
    get(id) {
        return this.merchants.find(merchant => merchant.id === id);
    }
    getAll() {
        return this.merchants;
    }
};
MerchantsService = __decorate([
    common_1.Injectable()
], MerchantsService);
exports.MerchantsService = MerchantsService;
//# sourceMappingURL=merchants.service.js.map