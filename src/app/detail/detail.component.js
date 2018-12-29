"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var api_1 = require("../services/api");
var page_1 = require("tns-core-modules/ui/page/page");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(pageRoute, api, page) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.api = api;
        this.page = page;
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.npm = +params['npm'];
        });
    }
    DetailComponent.prototype.loadMahasiswa = function () {
        var _this = this;
        this.api.getMahasiswa('/' + this.npm).subscribe(function (result) {
            _this.mahasiswa = result.data;
        });
    };
    DetailComponent.prototype.ngOnInit = function () {
        this.loadMahasiswa();
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.css'],
            providers: [api_1.ApiService]
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            api_1.ApiService,
            page_1.Page])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXdEO0FBQ3hELDRDQUEyQztBQUMzQyx1Q0FBNkM7QUFDN0Msc0RBQXFEO0FBV3JEO0lBSUMseUJBQ1MsU0FBb0IsRUFDcEIsR0FBZSxFQUNmLElBQVU7UUFIbkIsaUJBWUM7UUFYUSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2pDLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ2xELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNoQixLQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyRCxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBMUJXLGVBQWU7UUFSM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLGdCQUFVLENBQUM7U0FDdkIsQ0FBQzt5Q0FPbUIsa0JBQVM7WUFDZixnQkFBVTtZQUNULFdBQUk7T0FQUCxlQUFlLENBMkIzQjtJQUFELHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdkZXRhaWwnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZGV0YWlsLmNvbXBvbmVudC5jc3MnXSxcblx0cHJvdmlkZXJzOiBbQXBpU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRucG06IG51bWJlcjtcblx0bWFoYXNpc3dhOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcblx0XHRwcml2YXRlIGFwaTogQXBpU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2U6IFBhZ2Vcblx0KSB7XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cblx0XHR0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxuXHRcdFx0c3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcblx0XHQpLmZvckVhY2goKHBhcmFtcykgPT4ge1xuXHRcdFx0dGhpcy5ucG0gPSArcGFyYW1zWyducG0nXTtcblx0XHR9KTtcblx0fVxuXG5cdGxvYWRNYWhhc2lzd2EoKSB7XG5cdFx0dGhpcy5hcGkuZ2V0TWFoYXNpc3dhKCcvJyArIHRoaXMubnBtKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblx0XHRcdHRoaXMubWFoYXNpc3dhID0gcmVzdWx0LmRhdGE7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmxvYWRNYWhhc2lzd2EoKTtcblx0fVxufSJdfQ==