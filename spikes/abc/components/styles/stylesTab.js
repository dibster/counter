import {StyleSheet} from 'react-native';

const stylesTab = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 24
    },
    list: {
        flex: 1,
        flexDirection: 'row'
    },
    listContent: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        fontSize: 24,
        padding: 42,
        borderWidth: 1,
        borderColor: '#DDDDDD'
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    headingText: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center'
    }
});

module.exports = stylesTab;
