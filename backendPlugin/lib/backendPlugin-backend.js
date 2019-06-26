"use strict";
/**
 * Generated using theia-plugin-generator
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var theia = require("@theia/plugin");
function start() {
    var _this = this;
    var informationCommand = {
        id: 'information-message-command',
        label: 'information-message-command',
    };
    var informationModalCommand = {
        id: 'information-modal-message-command',
        label: 'Information Modal Message',
    };
    var inputbox = {
        id: 'inputbox-modal-message-command',
        label: 'InputBox Modal Message',
    };
    theia.commands.registerCommand(informationCommand, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, theia.window.showInformationMessage('Information message!')];
                    case 1:
                        action = _a.sent();
                        theia.window.showInformationMessage('Close information message ' + action);
                        return [2 /*return*/];
                }
            });
        });
    });
    theia.commands.registerCommand(informationModalCommand, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, theia.window.showInformationMessage('Information modal message!', { modal: true }, { title: 'action1' }, { title: 'action2', isCloseAffordance: true }, { title: 'action3' })];
                    case 1:
                        action = _a.sent();
                        theia.window.showInformationMessage('Resolve ' + action.title);
                        return [2 /*return*/];
                }
            });
        });
    });
    theia.commands.registerCommand(inputbox, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var option;
            return __generator(this, function (_a) {
                option = {
                    prompt: "Hello from Plugin",
                    placeHolder: "Type text there",
                    ignoreFocusOut: false,
                    password: false,
                    value: "Default value"
                };
                theia.window.showInputBox(option).then(function (s) {
                    console.log(typeof s !== 'undefined' ? s : "Input was canceled");
                    theia.window.showInformationMessage(typeof s !== 'undefined' ? s : "Input was canceled", { modal: true });
                });
                return [2 /*return*/];
            });
        });
    });
}
exports.start = start;
function stop() {
}
exports.stop = stop;
//# sourceMappingURL=backendPlugin-backend.js.map