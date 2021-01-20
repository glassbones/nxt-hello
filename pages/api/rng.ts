import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse)=> {

    

    // this is some code for an api request you would make outside of this function

    /*
        fetch('localhost:3000/api/rng', {   
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                username: 'admin',
                password: 'admin'
            })
        })
    */

    // inside this function you could mess with the response like this
    
    // console.log('REQUEST BODY', req.body)

    // for more methods type out "req." and check out the methods



    res.json({num: Math.floor(Math.random() * 10) })
}