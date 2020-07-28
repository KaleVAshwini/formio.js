var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AddDateComponentTransformer } from './AddDateComponent';
var AddQuartersTransformer = /** @class */ (function (_super) {
    __extends(AddQuartersTransformer, _super);
    function AddQuartersTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AddQuartersTransformer, "title", {
        get: function () {
            return 'Add Quarters';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddQuartersTransformer, "name", {
        get: function () {
            return 'addQuarters';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddQuartersTransformer, "presetArguments", {
        get: function () {
            return {
                unit: {
                    valueSource: 'string',
                    stringInput: 'quarters',
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return AddQuartersTransformer;
}(AddDateComponentTransformer));
export { AddQuartersTransformer };