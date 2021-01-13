import React, { Component } from 'react'

 class Appmaps extends Component {
    render() {
        return (
            <div>
                <div className="map-contain">
                    <iframe className="map-border" src="https://www.google.com/maps/d/u/0/embed?mid=1ytMydlulT4yB0__5DZw8ZXfppViV2QbW" style={{ 
                        border: '0',
                        width: '100%',
                        height: '400px',
                        frameborder: '0',
                        padding: '20px'
                    }} allowFullScreen>

                    </iframe>
                </div>
            </div>
        )
    }
}

export default Appmaps;