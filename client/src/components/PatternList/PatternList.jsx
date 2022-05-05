import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Pattern from '../Pattern/Pattern';

const patterns = [
  {
    name:'pattern1001',
    url:'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
  }, 
  {
    name:'pattern1002', 
   url:'https://sun9-88.userapi.com/s/v1/ig2/1kPhNocSb_MYCfCJUEx4ULIIyXsLQgFwovOfYp2nP_Nklvfvji_mmxMh86AbVE340i8SGB6_p7CFwjyXHPByOxb-.jpg?size=923x1080&quality=95&type=album',
  }, 
  {
    name:'pattern1003', 
    url: 'https://sun9-1.userapi.com/s/v1/ig2/D98lj_1A__12fjcUMVJTkpBHMcXRBPkPhrvln9PrFwJc1Wvb-MbDBJrXQETkXBiw9USdFLKt_ZOrgPOeYV2QzvW6.jpg?size=929x1080&quality=95&type=album'
  }, 
  {
    name:'pattern1004', 
    url: 'https://sun9-46.userapi.com/s/v1/ig2/y8JrtmhtW-qWQEHJuYTib41YrCbghaztiYn1Ah2NNldOJ5RF1bEdM6tWp36GGcpJqXl7qZHg7iVQhuRjIfpgqJas.jpg?size=826x1080&quality=95&type=album'  }, 
  {
    name:'pattern1005', 
    url: 'https://sun9-86.userapi.com/s/v1/ig2/J65LtBtX0oWGcaFKKqNGuBV-bmWlHXc54YUGzkly0SxMdcKxMgxUV8adevSzS8-WOfelsPIBklcc8AedmOUtJVtl.jpg?size=607x1080&quality=95&type=album'  }, 
  {
    name:'pattern1006', 
    url: 'https://sun9-59.userapi.com/s/v1/ig2/hBNQhYqkeqSdJXTAAKlcAjg2FN6c_cC_DYBVr251xXo8fo-WjXlf_OmY8h-AIWCNpydpDE2YE9DXM7Ve-6tHPWBf.jpg?size=720x1080&quality=95&type=album'  }, 
  {
    name:'pattern1007', 
    url: 'https://sun9-81.userapi.com/s/v1/ig2/FeW531PCBWcGl7WU_fe5OnnA0qhjLLU_-mKPqTrcPICj4ndEsvmZvaCa_aaA9mDPirgxBpEuZgTRaZ56YtiuC3OC.jpg?size=720x1080&quality=95&type=album'  }, 
];

function PatternList(props) {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch()
  //   fetchInitPatternsAC()
  // })


  return (
    <div className='container d-flex flex-wrap justify-content-around'>
      {patterns.map(pattern => <Pattern key={pattern.name} pattern={pattern} />)}
    </div>
  );
}

export default PatternList;
