const validate = (event, name, value, errors, setErrors) => {
    switch(name) {
        case 'title':
            if (value.length === 0) {
                setErrors({
                    ...errors,
                    title: 'Title cannot be blank/null'
                })
            } else {
                setErrors({
                    ...errors,
                    title: null
                })
            }
        break

        case 'startTime':
            if (
                !new RegExp(/([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]/).test(value)
            ) {
                setErrors({
                    ...errors,
                    startTime: 'Please enter the time in the format HH:MM:SS or HH:MM'
                })
            } else {
                setErrors({
                    ...errors,
                    startTime: null
                })
            }
        break

        case 'endTime':
            if (
                !new RegExp(/([0-9]{2}:)?[0-6][0-9]:[0-6][0-9]/).test(value)
            ) {
                setErrors({
                    ...errors,
                    startTime: 'Please enter the time in the format HH:MM:SS or HH:MM'
                })
            } else {
                setErrors({
                    ...errors,
                    startTime: null
                })
            }
        break

        case 'datePublished':
            if (
                !new RegExp(/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/).test(value)
            ) {
                setErrors({
                    ...errors,
                    datePublished: 'Please enter the date in the format MM/DD/YYYY'
                })
            } else {
                setErrors({
                    ...errors,
                    datePublished: null
                })
            }
        break

        case 'name':
            if (value.length === 0) {
                setErrors({
                    ...errors,
                    title: 'Show name cannot be blank/null'
                })
            } else {
                setErrors({
                    ...errors,
                    name: null
                })
            }
        break

        case 'link':
            if (value.length === 0) {
                setErrors({
                    ...errors,
                    title: 'Show name cannot be blank/null'
                })
            } else {
                setErrors({
                    ...errors,
                    link: null
                })
            }
        break

        case 'hosts':
            if (value.length === 0) {
                setErrors({
                    ...errors,
                    title: 'Show must have at least one host'
                })
            } else {
                setErrors({
                    ...errors,
                    link: null
                })
            }
        break

        default:
        break
    }
}

export default validate