"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const rating_orm_entity_1 = require("./entities/rating-orm.entity");
const mongoose_2 = require("mongoose");
let RatingsRepository = exports.RatingsRepository = class RatingsRepository {
    constructor(repository) {
        this.repository = repository;
    }
    createRating(dto) {
        return this.repository.create(dto);
    }
    deleteRating(id) {
        return this.repository.findByIdAndDelete(id);
    }
    getRatingById(id) {
        return this.repository.findById(id);
    }
    getAll() {
        return this.repository.find();
    }
};
exports.RatingsRepository = RatingsRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(rating_orm_entity_1.Rating.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RatingsRepository);
//# sourceMappingURL=ratings.repository.js.map