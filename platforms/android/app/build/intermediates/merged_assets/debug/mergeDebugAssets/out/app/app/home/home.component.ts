import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
var webViewInterfaceModule = require('nativescript-webview-interface');
var oWebViewInterface;
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{
    //private oLangWebViewInterface;

    constructor(public page: Page) {

        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.setupWebViewInterface() 
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() { 
    }

    setupWebViewInterface(){
        var webView = this.page.getViewById('webView');
        console.log(webView)
        oWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView, '../www/index.html');
    }
}
