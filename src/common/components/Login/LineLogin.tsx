import React, { Component } from 'react'
//import logo from '../../asset/Line_Base.png';
// import './lineLogin.css';
// import LIFF from '../../LineLoginBase';
// import AuthApi from '../../../api/AuthApi'
export default class LineLogin extends Component<any> {

	constructor(props: any) {
		super(props)
		this.onClickLogin = this.onClickLogin.bind(this)
	}
	async onClickLogin() {
		// await LIFF.initialize()
		// const line_token = await LIFF.getAccessToken();		
		// console.log(line_token)
		// const result = AuthApi.loginWithLine(line_token);
		// alert(JSON.stringify(result))
		
	};
	render() {
		return (
			<React.Fragment>
				{/* <button className='button-no-default button-expand-90 line-button' onClick={this.onClickLogin}>
					 <img src='../../asset/Line_Base.png' alt='line'></img> 
					<label>Log in with LINE</label>
				</button> */}
			</React.Fragment>
		)
	}
}
