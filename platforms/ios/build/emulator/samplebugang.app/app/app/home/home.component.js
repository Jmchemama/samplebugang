"use strict";
//mf8AtGkogC2apzZPPgwMum709FokUImn key MapQuest 15000/mois
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var webViewInterfaceModule = require('nativescript-webview-interface');
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.setupWebViewInterface();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.oLangWebViewInterface.destroy();
        this.oLangWebViewInterface = null;
    };
    /************************************************* CONFIGURATION WEBVIEW **********************************************************/
    HomeComponent.prototype.setupWebViewInterface = function () {
        var webViewNat = this.webView.nativeElement;
        this.oLangWebViewInterface = new webViewInterfaceModule.WebViewInterface(webViewNat, '~/www/index.html');
        webViewNat.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        });
    };
    __decorate([
        core_1.ViewChild('webView'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "webView", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMERBQTBEOztBQUUxRCxzQ0FBc0g7QUFDdEgsd0NBQXFEO0FBQ3JELElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFRdkU7SUFHSTtJQUNBLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFJRCxvSUFBb0k7SUFFN0gsNkNBQXFCLEdBQTVCO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFDeEcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsSUFBbUI7UUFFN0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0JxQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTtrREFBQztJQURqQyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUVXLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vbWY4QXRHa29nQzJhcHpaUFBnd011bTcwOUZva1VJbW4ga2V5IE1hcFF1ZXN0IDE1MDAwL21vaXNcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSAndWkvd2ViLXZpZXcnO1xubGV0IHdlYlZpZXdJbnRlcmZhY2VNb2R1bGUgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtd2Vidmlldy1pbnRlcmZhY2UnKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBAVmlld0NoaWxkKCd3ZWJWaWV3Jykgd2ViVmlldzogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIG9MYW5nV2ViVmlld0ludGVyZmFjZTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0dXBXZWJWaWV3SW50ZXJmYWNlKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub0xhbmdXZWJWaWV3SW50ZXJmYWNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vTGFuZ1dlYlZpZXdJbnRlcmZhY2UgPSBudWxsO1xuICAgIH1cblxuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDT05GSUdVUkFUSU9OIFdFQlZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHB1YmxpYyBzZXR1cFdlYlZpZXdJbnRlcmZhY2UoKSB7XG4gICAgICAgIHZhciB3ZWJWaWV3TmF0ID0gdGhpcy53ZWJWaWV3Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMub0xhbmdXZWJWaWV3SW50ZXJmYWNlID0gbmV3IHdlYlZpZXdJbnRlcmZhY2VNb2R1bGUuV2ViVmlld0ludGVyZmFjZSh3ZWJWaWV3TmF0LCAnfi93d3cvaW5kZXguaHRtbCcpXG4gICAgICAgIHdlYlZpZXdOYXQub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgKGFyZ3M6IExvYWRFdmVudERhdGEpID0+IHtcblxuICAgICAgICB9KTtcbiAgICB9XG59Il19