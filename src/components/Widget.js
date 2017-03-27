import React, { PropTypes } from 'react';

function Item(props) {
    let icon;

    if (props.icon === "down"){
        icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#c92663" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
    } else {
        icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3b84ba" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
    }

    return (
        <div className="cbar-item">
            <span className="cbar-code">{props.names ? props.name : props.code }</span>
            <span className="cbar-value">{props.value}</span>
            <span className="cbar-arrow">{icon}</span>
        </div>
    )
}

export default class Widget extends React.Component {
    constructor(props){
        super(props);
        let curries = this.props.val.split(',');
        this.state = {
            curries: curries,
            list: []
        };

        this.parseXML = this.parseXML.bind(this);
    }

    parseXML(){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://www.cbar.az/other/azn-rates');
            xhr.send();

            xhr.addEventListener('load', () => {
                let result = document.createElement('div');
                result.innerHTML = xhr.responseText.replace(/<img/g,'<p');
                resolve(result);
            });

            xhr.addEventListener('error', () => {
               reject('Linkdə problem var!');
            });
        })
    }

    componentWillMount(){
        this.parseXML().then(result => {
            let list = [];
            this.state.curries.forEach(curr => {
                let code = curr;
                let elms = result.querySelectorAll('.date');

                for(let i = 0; i < elms.length; i++){
                    if(elms[i].innerHTML.indexOf(curr) > -1){
                        let icon = elms[i].querySelector('.icon p').getAttribute('src');
                        if(icon.match(/down.png/)){ icon = "down"; } else { icon = "up";}

                        list.push({
                            code: code,
                            name: elms[i].querySelector('.left').innerText,
                            icon: icon,
                            value : elms[i].querySelector('.rate').innerText
                        });
                    }
                }
            });

            this.setState({
                list: list
            });
        });
    }

    render() {
        let list;
        if(this.state.list.length || this.state.list.length > 0){
            list = this.state.list.map((item, idx) => {
                return <Item names={this.props.names} key={idx} code={item.code} name={item.name} value={item.value} icon={item.icon} />
            });
        }

        let horizontal = this.props.horizontal ? 'horizontal' : '';

        return (
            <div className={'cbr-main ' +  horizontal}>
                { this.state.list ? list : 'loading...'}
            </div>
        );
    }
};

Widget.propTypes = {
    val: PropTypes.string.isRequired
};