import React from 'react'
import CountUp from 'react-countup';
import fork from '../assets/images/fork.svg';



function Counters() {

    const counterData = [{
        "counternum": 1,
        "img": fork,
        "countup": {
            "start": 100,
            "end": 150,
        },
        "desc": "members"
    },
    {
        "counternum": 2,
        "img": fork,
        "countup": {
            "start": 100,
            "end": 200,
        },
        "desc": "donations"
    },
    {
        "counternum": 3,
        "img": fork,
        "countup": {
            "start": 100,
            "end": 175,
        },
        "desc": "specialist"
    },
    {
        "counternum": 4,
        "img": fork,
        "countup": {
            "start": 100,
            "end": 225,
        },
        "desc": "dalicases"
    }

    ]


    return (
        <div className='row section'>
            {counterData.map((element, index) => {
                return <div key={element.counternum} className='col-sm-6 col-lg-3 col-md-6'>
                    <div className='counter'>
                        <img className='filter-color' src={element.img} width={100} alt='fork' />
                        <div className='counter-content'>
                            <CountUp className='count-up' start={element.countup.start} end={element.countup.end} duration={5} suffix="+" />
                            <h5>{element.desc}</h5>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Counters