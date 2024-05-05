import React from 'react';
import { Image, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const HomeBanner = () => {
    return (
      <View>
        <Image
          style={{ height: responsiveHeight(15),width:"100%",borderRadius:15}}
          source={require("../../assets/banner.png")}
        />
      </View>
    );
}


export default HomeBanner;
