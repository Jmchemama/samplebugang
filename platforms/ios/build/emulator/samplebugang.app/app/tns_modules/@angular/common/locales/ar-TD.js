/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/ar-TD", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
            return 3;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
            return 4;
        return 5;
    }
    exports.default = [
        'ar-TD', [['ص', 'م'], u, u], [['ص', 'م'], u, ['صباحًا', 'مساءً']],
        [
            ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
            [
                'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس',
                'الجمعة', 'السبت'
            ],
            u, ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
        ],
        u,
        [
            ['ي', 'ف', 'م', 'أ', 'و', 'ن', 'ل', 'غ', 'س', 'ك', 'ب', 'د'],
            [
                'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
                'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
            ],
            u
        ],
        u, [['ق.م', 'م'], u, ['قبل الميلاد', 'ميلادي']], 1, [6, 0],
        ['d\u200f/M\u200f/y', 'dd\u200f/MM\u200f/y', 'd MMMM y', 'EEEE، d MMMM y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1} {0}', u, u, u],
        [
            '.', ',', ';', '\u200e%\u200e', '\u200e+', '\u200e-', 'E', '×', '‰', '∞',
            'ليس رقمًا', ':'
        ],
        ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], 'FCFA', 'فرنك وسط أفريقي', {
            'AED': ['د.إ.\u200f'],
            'ARS': [u, 'AR$'],
            'AUD': ['AU$'],
            'BBD': [u, 'BB$'],
            'BHD': ['د.ب.\u200f'],
            'BMD': [u, 'BM$'],
            'BND': [u, 'BN$'],
            'BSD': [u, 'BS$'],
            'BZD': [u, 'BZ$'],
            'CAD': ['CA$'],
            'CLP': [u, 'CL$'],
            'CNY': ['CN¥'],
            'COP': [u, 'CO$'],
            'CUP': [u, 'CU$'],
            'DOP': [u, 'DO$'],
            'DZD': ['د.ج.\u200f'],
            'EGP': ['ج.م.\u200f', 'E£'],
            'FJD': [u, 'FJ$'],
            'GBP': ['£', 'UK£'],
            'GYD': [u, 'GY$'],
            'HKD': ['HK$'],
            'IQD': ['د.ع.\u200f'],
            'IRR': ['ر.إ.'],
            'JMD': [u, 'JM$'],
            'JOD': ['د.أ.\u200f'],
            'JPY': ['JP¥'],
            'KWD': ['د.ك.\u200f'],
            'KYD': [u, 'KY$'],
            'LBP': ['ل.ل.\u200f', 'L£'],
            'LYD': ['د.ل.\u200f'],
            'MAD': ['د.م.\u200f'],
            'MRO': ['أ.م.\u200f'],
            'MXN': ['MX$'],
            'NZD': ['NZ$'],
            'OMR': ['ر.ع.\u200f'],
            'QAR': ['ر.ق.\u200f'],
            'SAR': ['ر.س.\u200f'],
            'SBD': [u, 'SB$'],
            'SDD': ['د.س.\u200f'],
            'SDG': ['ج.س.'],
            'SRD': [u, 'SR$'],
            'SYP': ['ل.س.\u200f', '£'],
            'THB': ['฿'],
            'TND': ['د.ت.\u200f'],
            'TTD': [u, 'TT$'],
            'TWD': ['NT$'],
            'USD': ['US$'],
            'UYU': [u, 'UY$'],
            'XXX': ['***'],
            'YER': ['ر.ي.\u200f']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXItVEQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9hci1URC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRTtZQUNFLENBQUMsR0FBRyxFQUFF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S0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7WUFDM0IsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO1lBQzFCLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3RCO1FBQ0QsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKG4gPT09IDApIHJldHVybiAwO1xuICBpZiAobiA9PT0gMSkgcmV0dXJuIDE7XG4gIGlmIChuID09PSAyKSByZXR1cm4gMjtcbiAgaWYgKG4gJSAxMDAgPT09IE1hdGguZmxvb3IobiAlIDEwMCkgJiYgbiAlIDEwMCA+PSAzICYmIG4gJSAxMDAgPD0gMTApIHJldHVybiAzO1xuICBpZiAobiAlIDEwMCA9PT0gTWF0aC5mbG9vcihuICUgMTAwKSAmJiBuICUgMTAwID49IDExICYmIG4gJSAxMDAgPD0gOTkpIHJldHVybiA0O1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnYXItVEQnLCBbWyfYtScsICfZhSddLCB1LCB1XSwgW1sn2LUnLCAn2YUnXSwgdSwgWyfYtdio2KfYrdmL2KcnLCAn2YXYs9in2KHZiyddXSxcbiAgW1xuICAgIFsn2K0nLCAn2YYnLCAn2KsnLCAn2LEnLCAn2K4nLCAn2KwnLCAn2LMnXSxcbiAgICBbXG4gICAgICAn2KfZhNij2K3YrycsICfYp9mE2KfYq9mG2YrZhicsICfYp9mE2KvZhNin2KvYp9ihJywgJ9in2YTYo9ix2KjYudin2KEnLCAn2KfZhNiu2YXZitizJyxcbiAgICAgICfYp9mE2KzZhdi52KknLCAn2KfZhNiz2KjYqidcbiAgICBdLFxuICAgIHUsIFsn2KPYrdivJywgJ9il2KvZhtmK2YYnLCAn2KvZhNin2KvYp9ihJywgJ9ij2LHYqNi52KfYoScsICfYrtmF2YrYsycsICfYrNmF2LnYqScsICfYs9io2KonXVxuICBdLFxuICB1LFxuICBbXG4gICAgWyfZiicsICfZgScsICfZhScsICfYoycsICfZiCcsICfZhicsICfZhCcsICfYuicsICfYsycsICfZgycsICfYqCcsICfYryddLFxuICAgIFtcbiAgICAgICfZitmG2KfZitixJywgJ9mB2KjYsdin2YrYsScsICfZhdin2LHYsycsICfYo9io2LHZitmEJywgJ9mF2KfZitmIJywgJ9mK2YjZhtmK2YgnLFxuICAgICAgJ9mK2YjZhNmK2YgnLCAn2KPYutiz2LfYsycsICfYs9io2KrZhdio2LEnLCAn2KPZg9iq2YjYqNixJywgJ9mG2YjZgdmF2KjYsScsICfYr9mK2LPZhdio2LEnXG4gICAgXSxcbiAgICB1XG4gIF0sXG4gIHUsIFtbJ9mCLtmFJywgJ9mFJ10sIHUsIFsn2YLYqNmEINin2YTZhdmK2YTYp9ivJywgJ9mF2YrZhNin2K/ZiiddXSwgMSwgWzYsIDBdLFxuICBbJ2RcXHUyMDBmL01cXHUyMDBmL3knLCAnZGRcXHUyMDBmL01NXFx1MjAwZi95JywgJ2QgTU1NTSB5JywgJ0VFRUXYjCBkIE1NTU0geSddLFxuICBbJ2g6bW0gYScsICdoOm1tOnNzIGEnLCAnaDptbTpzcyBhIHonLCAnaDptbTpzcyBhIHp6enonXSwgWyd7MX0gezB9JywgdSwgdSwgdV0sXG4gIFtcbiAgICAnLicsICcsJywgJzsnLCAnXFx1MjAwZSVcXHUyMDBlJywgJ1xcdTIwMGUrJywgJ1xcdTIwMGUtJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsXG4gICAgJ9mE2YrYs8Kg2LHZgtmF2YvYpycsICc6J1xuICBdLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqTCoCMsIyMwLjAwJywgJyNFMCddLCAnRkNGQScsICfZgdix2YbZgyDZiNiz2Lcg2KPZgdix2YrZgtmKJywge1xuICAgICdBRUQnOiBbJ9ivLtilLlxcdTIwMGYnXSxcbiAgICAnQVJTJzogW3UsICdBUiQnXSxcbiAgICAnQVVEJzogWydBVSQnXSxcbiAgICAnQkJEJzogW3UsICdCQiQnXSxcbiAgICAnQkhEJzogWyfYry7YqC5cXHUyMDBmJ10sXG4gICAgJ0JNRCc6IFt1LCAnQk0kJ10sXG4gICAgJ0JORCc6IFt1LCAnQk4kJ10sXG4gICAgJ0JTRCc6IFt1LCAnQlMkJ10sXG4gICAgJ0JaRCc6IFt1LCAnQlokJ10sXG4gICAgJ0NBRCc6IFsnQ0EkJ10sXG4gICAgJ0NMUCc6IFt1LCAnQ0wkJ10sXG4gICAgJ0NOWSc6IFsnQ07CpSddLFxuICAgICdDT1AnOiBbdSwgJ0NPJCddLFxuICAgICdDVVAnOiBbdSwgJ0NVJCddLFxuICAgICdET1AnOiBbdSwgJ0RPJCddLFxuICAgICdEWkQnOiBbJ9ivLtisLlxcdTIwMGYnXSxcbiAgICAnRUdQJzogWyfYrC7ZhS5cXHUyMDBmJywgJ0XCoyddLFxuICAgICdGSkQnOiBbdSwgJ0ZKJCddLFxuICAgICdHQlAnOiBbJ8KjJywgJ1VLwqMnXSxcbiAgICAnR1lEJzogW3UsICdHWSQnXSxcbiAgICAnSEtEJzogWydISyQnXSxcbiAgICAnSVFEJzogWyfYry7YuS5cXHUyMDBmJ10sXG4gICAgJ0lSUic6IFsn2LEu2KUuJ10sXG4gICAgJ0pNRCc6IFt1LCAnSk0kJ10sXG4gICAgJ0pPRCc6IFsn2K8u2KMuXFx1MjAwZiddLFxuICAgICdKUFknOiBbJ0pQwqUnXSxcbiAgICAnS1dEJzogWyfYry7Zgy5cXHUyMDBmJ10sXG4gICAgJ0tZRCc6IFt1LCAnS1kkJ10sXG4gICAgJ0xCUCc6IFsn2YQu2YQuXFx1MjAwZicsICdMwqMnXSxcbiAgICAnTFlEJzogWyfYry7ZhC5cXHUyMDBmJ10sXG4gICAgJ01BRCc6IFsn2K8u2YUuXFx1MjAwZiddLFxuICAgICdNUk8nOiBbJ9ijLtmFLlxcdTIwMGYnXSxcbiAgICAnTVhOJzogWydNWCQnXSxcbiAgICAnTlpEJzogWydOWiQnXSxcbiAgICAnT01SJzogWyfYsS7YuS5cXHUyMDBmJ10sXG4gICAgJ1FBUic6IFsn2LEu2YIuXFx1MjAwZiddLFxuICAgICdTQVInOiBbJ9ixLtizLlxcdTIwMGYnXSxcbiAgICAnU0JEJzogW3UsICdTQiQnXSxcbiAgICAnU0REJzogWyfYry7Ysy5cXHUyMDBmJ10sXG4gICAgJ1NERyc6IFsn2Kwu2LMuJ10sXG4gICAgJ1NSRCc6IFt1LCAnU1IkJ10sXG4gICAgJ1NZUCc6IFsn2YQu2LMuXFx1MjAwZicsICfCoyddLFxuICAgICdUSEInOiBbJ+C4vyddLFxuICAgICdUTkQnOiBbJ9ivLtiqLlxcdTIwMGYnXSxcbiAgICAnVFREJzogW3UsICdUVCQnXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnVVNEJzogWydVUyQnXSxcbiAgICAnVVlVJzogW3UsICdVWSQnXSxcbiAgICAnWFhYJzogWycqKionXSxcbiAgICAnWUVSJzogWyfYsS7Zii5cXHUyMDBmJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19