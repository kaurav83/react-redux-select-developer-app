import React, {Component} from 'react';
import styles from './Picker.css';

class Picker extends Component {

    render() {
        const {value, options, onChange} = this.props;

        return (
            <div className={styles.root}>
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    {
                        options.map(option => 
                            <option 
                                value={option}
                                key={option}
                                style={{color: "#000"}}
                            >
                                {option}
                            </option>
                        )
                    }
                </select>
            </div>
        )
    }
}

export default Picker;