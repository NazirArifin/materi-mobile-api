"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = 'https://api.unira.ac.id';
    }
    ApiService.prototype.getMahasiswa = function (params) {
        if (params === void 0) { params = ''; }
        return this.http.get(this.apiUrl + '/v1/mahasiswa' + params).pipe(operators_1.catchError(this.handleErrors));
    };
    ApiService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUNsRCw2QkFBa0M7QUFDbEMsNENBQTRDO0FBRzVDO0lBR0Usb0JBQ1UsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUgxQixXQUFNLEdBQUcseUJBQXlCLENBQUM7SUFJaEMsQ0FBQztJQUVKLGlDQUFZLEdBQVosVUFBYSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvRCxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxPQUFPLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFoQlUsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQUtLLGlCQUFVO09BSmYsVUFBVSxDQWlCdEI7SUFBRCxpQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XHJcbiAgYXBpVXJsID0gJ2h0dHBzOi8vYXBpLnVuaXJhLmFjLmlkJztcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICkge31cclxuXHJcbiAgZ2V0TWFoYXNpc3dhKHBhcmFtczogc3RyaW5nID0gJycpOiBPYnNlcnZhYmxlPGFueT4geyBcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsICsgJy92MS9tYWhhc2lzd2EnICsgcGFyYW1zKS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXX0=