var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    componentWillMount: function () {
        console.log('called before mounting the component');
    },
    componentDidMount: function () {
        console.log('starting the component update');
    },
    componentWillReceiveProps: function (nextProps) {
        console.log('method compares props and checks changes');
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('method used to optimize the application')
        return true
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('works just like componentWillMount');
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log('changes in the DOM');
    },
    componentWillUnmount: function () {
        console.log('called before unmount the component');
    },

    render: function () {
        return React.createElement('div', {
                className: 'count'
            },
            React.createElement('button', {
                onClick: this.increment
            }, '+'),
            React.createElement('span', {}, 'Counter ' + this.state.counter),
            React.createElement('button', {
                onClick: this.decrement
            }, '-'),
        );
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);
ReactDOM.render(element, document.getElementById('app'));