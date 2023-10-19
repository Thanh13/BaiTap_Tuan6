import { Image, Text, View, StyleSheet } from 'react-native'

export default function Rater() {
    return (
        <View style={ratingStyles.container}>
            <View style={ratingStyles.starContainer}>
                <Image
                    style={{ aspectRatio: 1 }}
                    source={require('../assets/star.png')}
                />
                <Image
                    style={{ aspectRatio: 1 }}
                    source={require('../assets/star.png')}
                />
                <Image
                    style={{ aspectRatio: 1 }}
                    source={require('../assets/star.png')}
                />
                <Image
                    style={{ aspectRatio: 1 }}
                    source={require('../assets/star.png')}
                />
                <Image
                    style={{ aspectRatio: 1 }}
                    source={require('../assets/star.png')}
                />
            </View>
            <Text style={ratingStyles.text}>(Xem 828 đánh giá)</Text>
        </View>
    )
}

const ratingStyles = StyleSheet.create({
    container: { flexDirection: 'row', height: '5%', gap: '10%' },
    starContainer: { flex: 1, flexDirection: 'row' },
    text: { flex: 1, fontSize: 15, alignSelf: 'center' }
})