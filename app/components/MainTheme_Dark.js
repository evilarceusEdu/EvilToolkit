'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('../../node_modules/material-ui/styles/colors');

var _colorManipulator = require('../../node_modules/material-ui/utils/colorManipulator');

var _spacing = require('../../node_modules/material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    default: {
        spacing: _spacing2.default,
        fontFamily: 'Roboto, sans-serif',
        borderRadius: 2,
        palette: {
            primary1Color: _colors.blue700,
            primary2Color: _colors.blue700,
            primary3Color: _colors.grey600,
            accent1Color: _colors.pinkA200,
            accent2Color: _colors.pinkA400,
            accent3Color: _colors.pinkA100,
            textColor: _colors.fullWhite,
            secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
            alternateTextColor: '#303030',
            canvasColor: '#303030',
            borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
            disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
            pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
            clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
        }
    },
    ytdl: {
        spacing: _spacing2.default,
        fontFamily: 'Roboto, sans-serif',
        borderRadius: 2,
        palette: {
            primary1Color: _colors.red700,
            primary2Color: _colors.red700,
            primary3Color: _colors.grey600,
            accent1Color: _colors.pinkA200,
            accent2Color: _colors.pinkA400,
            accent3Color: _colors.pinkA100,
            textColor: _colors.fullWhite,
            secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
            alternateTextColor: '#303030',
            canvasColor: '#303030',
            borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
            disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
            pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
            clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
        }
    }
}