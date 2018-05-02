import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
const baseUrl = 'https://prabeen-restapi.herokuapp.com/api/posts';

class Post extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                posts: data
            })
        })
    }
  render() {
    if(this.state.posts.length === 0){
        return (<View><Text>Loading...</Text></View>);
    }
    return (
      <View>
        {this.state.posts.map(post=>{
            console.log(post)
            return <Text key={post._id} style={styles.postCard}>{ post.title} </Text>
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    postCard:{
        color: 'tomato',
        fontWeight: 'bold',
        fontSize: 30
    }
})
export default Post;