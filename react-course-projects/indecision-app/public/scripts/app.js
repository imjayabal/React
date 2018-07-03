'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import classNames from 'classnames';

var defaultClass = 'mopro-tab';

var MoproTab = function (_React$Component) {
    _inherits(MoproTab, _React$Component);

    function MoproTab() {
        _classCallCheck(this, MoproTab);

        return _possibleConstructorReturn(this, (MoproTab.__proto__ || Object.getPrototypeOf(MoproTab)).apply(this, arguments));
    }

    _createClass(MoproTab, [{
        key: 'render',
        value: function render() {
            return console.log('Mopro Tab'), React.createElement(
                Tabs,
                null,
                React.createElement(
                    TabList,
                    null,
                    React.createElement(
                        Tab,
                        null,
                        'One '
                    ),
                    React.createElement(
                        Tab,
                        null,
                        'Two '
                    ),
                    React.createElement(
                        Tab,
                        null,
                        'Three '
                    )
                ),
                React.createElement(
                    TabPanel,
                    null,
                    React.createElement(
                        'h2',
                        null,
                        'Result One'
                    )
                ),
                React.createElement(
                    TabPanel,
                    null,
                    React.createElement(
                        'h2',
                        null,
                        'Result One'
                    )
                ),
                React.createElement(
                    TabPanel,
                    null,
                    React.createElement(
                        'h2',
                        null,
                        'Result One'
                    )
                )
            );
        }
    }]);

    return MoproTab;
}(React.Component);

var Tabs = function (_React$Component2) {
    _inherits(Tabs, _React$Component2);

    function Tabs() {
        _classCallCheck(this, Tabs);

        return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }

    _createClass(Tabs, [{
        key: 'render',
        value: function render() {
            return console.log('Tabs'), React.createElement(
                'div',
                { className: defaultClass },
                this.props.children
            );
        }
    }]);

    return Tabs;
}(React.Component);

var TabList = function (_React$Component3) {
    _inherits(TabList, _React$Component3);

    function TabList() {
        _classCallCheck(this, TabList);

        return _possibleConstructorReturn(this, (TabList.__proto__ || Object.getPrototypeOf(TabList)).apply(this, arguments));
    }

    _createClass(TabList, [{
        key: 'render',
        value: function render() {
            return console.log('Tab nav'), React.createElement(
                'ul',
                { className: defaultClass + '__nav', role: 'tabnav' },
                this.props.children
            );
        }
    }]);

    return TabList;
}(React.Component);

var Tab = function (_React$Component4) {
    _inherits(Tab, _React$Component4);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this4 = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this));

        _this4.clickFunction = _this4.clickFunction.bind(_this4);
        _this4.state = {
            defaultClass: defaultClass + '__list',
            activeClass: defaultClass + '--active',
            selected: true
        };
        return _this4;
    }

    _createClass(Tab, [{
        key: 'clickFunction',
        value: function clickFunction() {
            var children = this.props.children;
            console.log(children, this.state.defaultClass + ' ' + this.state.activeClass);
            this.setState(function (changeClass) {
                if (changeClass) {
                    return {
                        defaultClass: changeClass.defaultClass + ' ' + changeClass.activeClass
                    };
                } else {
                    return {
                        defaultClass: changeClass.defaultClass
                    };
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return console.log('Tab List'), React.createElement(
                'li',
                {
                    className: this.state.defaultClass,
                    role: 'tablist',
                    onClick: this.clickFunction
                },
                this.props.children
            );
        }
    }]);

    return Tab;
}(React.Component);

var TabPanel = function (_React$Component5) {
    _inherits(TabPanel, _React$Component5);

    function TabPanel() {
        _classCallCheck(this, TabPanel);

        return _possibleConstructorReturn(this, (TabPanel.__proto__ || Object.getPrototypeOf(TabPanel)).apply(this, arguments));
    }

    _createClass(TabPanel, [{
        key: 'render',
        value: function render() {
            return console.log('Tab panel'), React.createElement(
                'div',
                { className: defaultClass + '__panel', role: 'tabpanel' },
                this.props.children
            );
        }
    }]);

    return TabPanel;
}(React.Component);

ReactDOM.render(React.createElement(MoproTab, null), document.getElementById('app'));
