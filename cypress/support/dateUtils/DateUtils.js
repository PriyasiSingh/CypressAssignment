export class DateUtils {

    getMonthIndexFromName(monthName) {

        var month = {
            'January': '0',
            'Feburary': '1',
            'March': '2',
            'April': '3',
            'May': '4',
            'June': '5',
            'July': '6',
            'August': '7',
            'September': '8',
            'October': '9',
            'November': '10',
            'December': '11'

        }

        return month[monthName]

    }


}