"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var webViewInterfaceModule = require('nativescript-webview-interface');
var oWebViewInterface;
var HomeComponent = /** @class */ (function () {
    //private oLangWebViewInterface;
    function HomeComponent(page) {
        this.page = page;
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.setupWebViewInterface();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.prototype.setupWebViewInterface = function () {
        var webView = this.page.getViewById('webView');
        console.log(webView);
        oWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView, '../www/index.html');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxzREFBcUQ7QUFDckQsSUFBSSxzQkFBc0IsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUN2RSxJQUFJLGlCQUFpQixDQUFDO0FBTXRCO0lBQ0ksZ0NBQWdDO0lBRWhDLHVCQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUV6QixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsdUNBQWUsR0FBZjtJQUNBLENBQUM7SUFFRCxtQ0FBVyxHQUFYO0lBQ0EsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsaUJBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBdEJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSTJCLFdBQUk7T0FIcEIsYUFBYSxDQXVCekI7SUFBRCxvQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG52YXIgd2ViVmlld0ludGVyZmFjZU1vZHVsZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC13ZWJ2aWV3LWludGVyZmFjZScpO1xudmFyIG9XZWJWaWV3SW50ZXJmYWNlO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95e1xuICAgIC8vcHJpdmF0ZSBvTGFuZ1dlYlZpZXdJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFnZTogUGFnZSkge1xuXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0dXBXZWJWaWV3SW50ZXJmYWNlKCkgXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkgeyBcbiAgICB9XG5cbiAgICBzZXR1cFdlYlZpZXdJbnRlcmZhY2UoKXtcbiAgICAgICAgdmFyIHdlYlZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ3dlYlZpZXcnKTtcbiAgICAgICAgY29uc29sZS5sb2cod2ViVmlldylcbiAgICAgICAgb1dlYlZpZXdJbnRlcmZhY2UgPSBuZXcgd2ViVmlld0ludGVyZmFjZU1vZHVsZS5XZWJWaWV3SW50ZXJmYWNlKHdlYlZpZXcsICcuLi93d3cvaW5kZXguaHRtbCcpO1xuICAgIH1cbn1cbiJdfQ==