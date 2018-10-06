import React from 'react';
import {StyleSheet,Image} from 'react-native';
import { Ionicons,Foundation } from '@expo/vector-icons';
import {Container, Card, CardItem, Text, Body,Left, Thumbnail} from 'native-base';

class MainScreenCardComponents extends React.Component{
	state = {
		toggle:true
	}
	like_dislike() {
		const newState = !this.state.toggle;
		this.setState({toggle: newState});	
	}
	render(){
		const {toggle} = this.state;
		const textVal = toggle?"ios-heart-outline":"ios-heart";
		// contentImageSource = {this.props.contentImageSource};
		// profilePic = {this.props.profilePic};
		const ContentImage = {
			"1" : require('../assets/roadster.jpg'),
			"2" : require('../assets/trump-kim.jpg')
		}
		const profilePic = {
			"1" : require('../assets/elon-musk.jpg'),
			"2" : require('../assets/donald-trump.jpg')
		}
		return(
			<Card>
				<CardItem>
					<Left>
						<Thumbnail source={profilePic[this.props.profile]}/>
						<Body>
							<Text>{this.props.name}</Text>
							<Text>6 October, 2018</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem style={{paddingTop: 0}}>
					<Image source={ContentImage[this.props.contentImageSource]} style = {styles.imageStyle}/>
				</CardItem>
				<CardItem style={{height: 45}}>
					<Ionicons name = {textVal} size={32} color="red" style = {{paddingHorizontal: 10}} onPress={()=>this.like_dislike()}/>
					<Foundation name = "comments" size={32} color="black" style = {{paddingHorizontal: 10}}/>
					<Text>{this.props.like}</Text>
				</CardItem>
				<CardItem style={{paddingTop: 0}}>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Bibendum ut tristique et egestas. Id volutpat lacus laoreet non curabitur gravida. 
						Blandit libero volutpat sed cras ornare arcu dui vivamus. 
						Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. 
						Eget arcu dictum varius duis at consectetur lorem donec massa. 
					</Text>
				</CardItem>
			</Card>
			);
	}
}
export default MainScreenCardComponents;

const styles = StyleSheet.create({
	imageStyle:{
		flex: 1,
	}
});