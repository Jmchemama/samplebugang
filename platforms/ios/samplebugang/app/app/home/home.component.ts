//mf8AtGkogC2apzZPPgwMum709FokUImn key MapQuest 15000/mois

import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, OnInit } from "@angular/core";
import { WebView, LoadEventData } from 'ui/web-view';
let webViewInterfaceModule = require('nativescript-webview-interface');

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('webView') webView: ElementRef;
    private oLangWebViewInterface;
    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.setupWebViewInterface();
    }

    ngOnDestroy() {
        this.oLangWebViewInterface.destroy();
        this.oLangWebViewInterface = null;
    }



    /************************************************* CONFIGURATION WEBVIEW **********************************************************/

    public setupWebViewInterface() {
        var webViewNat = this.webView.nativeElement;
        this.oLangWebViewInterface = new webViewInterfaceModule.WebViewInterface(webViewNat, '~/www/index.html')
        webViewNat.on(WebView.loadFinishedEvent, (args: LoadEventData) => {

        });
    }
}