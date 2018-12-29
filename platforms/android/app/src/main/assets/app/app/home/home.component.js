"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_1 = require("../services/api");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, page, router) {
        this.api = api;
        this.page = page;
        this.router = router;
        this.mahasiswaList = [];
        this.page.actionBarHidden = true;
    }
    HomeComponent.prototype.loadMahasiswa = function () {
        var _this = this;
        this.api.getMahasiswa('?limit=10&filter[nim]=201552').subscribe(function (result) {
            _this.mahasiswaList = result.data;
        });
    };
    HomeComponent.prototype.onTap = function (args) {
        var npm = this.mahasiswaList[parseInt(args.object.get('id'), 10)].id;
        this.router.navigate(['/detail', npm], {
            transition: {
                name: "flip", duration: 500, curve: 'linear'
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loadMahasiswa();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            providers: [api_1.ApiService]
        }),
        __metadata("design:paramtypes", [api_1.ApiService,
            page_1.Page,
            router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1Q0FBNkM7QUFDN0Msc0RBQWdFO0FBQ2hFLHNEQUErRDtBQVUvRDtJQUVDLHVCQUNTLEdBQWUsRUFDZixJQUFVLEVBQ1YsTUFBd0I7UUFGeEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUtqQyxrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUh6QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUtELHFDQUFhLEdBQWI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyRSxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLElBQWU7UUFDcEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDdEMsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUTthQUM1QztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUE5QlcsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsZ0JBQVUsQ0FBQztTQUN2QixDQUFDO3lDQUthLGdCQUFVO1lBQ1QsV0FBSTtZQUNGLHlCQUFnQjtPQUxyQixhQUFhLENBK0J6QjtJQUFELG9CQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgeyBQYWdlLCBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG5cdHByb3ZpZGVyczogW0FwaVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlOiBQYWdlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zXG5cdCkge1xuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHR9XG5cblx0bWFoYXNpc3dhTGlzdDogYW55W10gPSBbXTtcblx0c2VsZWN0ZWRJdGVtczogc3RyaW5nO1xuXHRcblx0bG9hZE1haGFzaXN3YSgpIHtcblx0XHR0aGlzLmFwaS5nZXRNYWhhc2lzd2EoJz9saW1pdD0xMCZmaWx0ZXJbbmltXT0yMDE1NTInKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblx0XHRcdHRoaXMubWFoYXNpc3dhTGlzdCA9IHJlc3VsdC5kYXRhO1xuXHRcdH0pO1xuXHR9XG5cblx0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XG5cdFx0Y29uc3QgbnBtID0gdGhpcy5tYWhhc2lzd2FMaXN0W3BhcnNlSW50KGFyZ3Mub2JqZWN0LmdldCgnaWQnKSwgMTApXS5pZDtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kZXRhaWwnLCBucG1dLCB7XG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdG5hbWU6IFwiZmxpcFwiLCBkdXJhdGlvbjogNTAwLCBjdXJ2ZTogJ2xpbmVhcidcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5sb2FkTWFoYXNpc3dhKCk7XG5cdH1cbn0iXX0=