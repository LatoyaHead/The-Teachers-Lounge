import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
const lounges = [
  {
    avatar: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20280%20280%22%20fill%3D%22none%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%3EAvataaars%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%3E%3Cdc%3Atitle%3EPablo%20Stanley%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Favataaars.com%2F%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Favataaars.com%2F%22%2F%3E%3Cdc%3Acontributor%3E%3Ccc%3AAgent%3E%3Cdc%3Atitle%3EFlorian%20K%C3%B6rner%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acontributor%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22avatarsRadiusMask%22%3E%3Crect%20width%3D%22280%22%20height%3D%22280%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23avatarsRadiusMask)%22%3E%3Cg%20transform%3D%22translate(40%2C%2036)%22%3E%3Cpath%20d%3D%22M100%200C69.072%200%2044%2025.072%2044%2056v6.166c-5.675.952-10%205.888-10%2011.834v14c0%206.052%204.48%2011.058%2010.305%2011.881%202.067%2019.806%2014.458%2036.541%2031.695%2044.73V163h-4c-39.764%200-72%2032.236-72%2072v9h200v-9c0-39.764-32.236-72-72-72h-4v-18.389c17.237-8.189%2029.628-24.924%2031.695-44.73C161.52%2099.058%20166%2094.052%20166%2088V74c0-5.946-4.325-10.882-10-11.834V56c0-30.928-25.072-56-56-56z%22%20fill%3D%22%23EDB98A%22%2F%3E%3Cpath%20d%3D%22M76%20144.611v8A55.79%2055.79%200%2000100%20158a55.789%2055.789%200%200024-5.389v-8A55.789%2055.789%200%2001100%20150a55.79%2055.79%200%2001-24-5.389z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(8%2C%20170)%22%3E%3Cpath%20d%3D%22M132.5%2051.828c18.502%200%2033.5-9.617%2033.5-21.48%200-.353-.013-.704-.04-1.053%2036.976%203.03%2066.04%2034%2066.04%2071.757V110H32v-8.948c0-38.1%2029.592-69.287%2067.045-71.833-.03.374-.045.75-.045%201.129%200%2011.863%2014.998%2021.48%2033.5%2021.48z%22%20fill%3D%22%23E6E6E6%22%2F%3E%3Cpath%20d%3D%22M132.5%2058.761c21.89%200%2039.635-12.05%2039.635-26.913%200-.603-.029-1.2-.086-1.793a72.056%2072.056%200%2000-6.089-.76c.027.349.04.7.04%201.053%200%2011.863-14.998%2021.48-33.5%2021.48-18.502%200-33.5-9.617-33.5-21.48%200-.379.015-.755.045-1.128-2.05.139-4.077.364-6.077.672a18.594%2018.594%200%2000-.103%201.956c0%2014.864%2017.745%2026.913%2039.635%2026.913z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.16%22%2F%3E%3Cpath%20d%3D%22M100.778%2029.122c.072-.378.145-.752.222-1.122-2.959.054-6%201-6%201l-.42.662C59.267%2034.276%2032%2064.48%2032%20101.052V110h74s-10.7-51.555-5.238-80.793l.023-.085h-.007zM158%20110s11-53%205-82c2.959.054%206%201%206%201l.419.662C204.733%2034.276%20232%2064.48%20232%20101.052V110h-74z%22%20fill%3D%22%23FFFFFF%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M101%2028c-6%2029%205%2082%205%2082H90L76%2074l6-9-6-6%2019-30s3.041-.946%206-1zm62%200c6%2029-5%2082-5%2082h16l14-36-6-9%206-6-19-30s-3.041-.946-6-1z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.15%22%2F%3E%3Cpath%20d%3D%22M183.423%2085.77l.871-2.24%206.262-4.697a4%204%200%20014.856.043L202%2084l-18.577%201.77z%22%20fill%3D%22%23E6E6E6%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(86%2C%20134)%22%3E%3Cpath%20d%3D%22M28%2026.244c1.358.488%202.84.756%204.392.756%205.322%200%209.821-3.153%2011.294-7.486%202.475%202.156%206.177%203.525%2010.314%203.525%204.137%200%207.84-1.37%2010.314-3.525C65.787%2023.847%2070.286%2027%2075.608%2027c1.552%200%203.034-.268%204.392-.756h-.054l-.063.001h-.06c-6.33%200-11.803-4.9-11.803-10.568%200-4.182%202.32-7.718%205.687-9.677-5.5.797-9.725%204.995-9.898%2010.106-2.564%201.736-6.014%202.8-9.809%202.8-3.795%200-7.245-1.064-9.81-2.8-.172-5.11-4.398-9.309-9.896-10.106%203.366%201.959%205.687%205.495%205.687%209.677%200%205.668-5.474%2010.568-11.804%2010.568H28z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.6%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20d%3D%22M17%2024a9%209%200%20100-18%209%209%200%20000%2018zm74%200a9%209%200%20100-18%209%209%200%20000%2018z%22%20fill%3D%22%23FF4646%22%20fill-opacity%3D%22.2%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(112%2C%20122)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208c0%204.418%205.373%208%2012%208s12-3.582%2012-8%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.16%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(84%2C%2090)%22%3E%3Cpath%20d%3D%22M26.998%2016c-4.834%200-8.991%202.648-10.838%206.447-.54%201.111.387%201.853%201.277%201.125%202.437-1.993%205.82-3.228%209.56-3.228.082%200%20.163%200%20.244.002a6%206%200%201010.699%202.8%202%202%200%2000-.125-.739%207.55%207.55%200%2000-.144-.372%206.007%206.007%200%2000-1.646-2.484C33.9%2017.317%2030.507%2016%2026.998%2016zm58%200c-4.834%200-8.991%202.648-10.838%206.447-.54%201.111.387%201.853%201.278%201.125%202.436-1.993%205.82-3.228%209.56-3.228.08%200%20.162%200%20.243.002a6%206%200%201010.699%202.8%202%202%200%2000-.125-.739%207.55%207.55%200%2000-.144-.372%206.007%206.007%200%2000-1.646-2.484C91.9%2017.317%2088.506%2016%2084.998%2016z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.6%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(84%2C%2082)%22%3E%3Cpath%20d%3D%22M15.976%2017.128C17.47%207.605%2030.059%201.108%2039.164%205.3a2%202%200%20101.672-3.633c-11.487-5.29-26.9%202.664-28.812%2014.84a2%202%200%20003.952.62zm80.048%200C94.53%207.605%2081.942%201.108%2072.837%205.3a2%202%200%2011-1.673-3.633c11.487-5.29%2026.9%202.664%2028.812%2014.84a2%202%200%2001-3.952.62z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.6%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(7%2C%200)%22%3E%3Cpath%20d%3D%22M86.671%2068H64v112.912A4.088%204.088%200%200068.088%20185c10.264%200%2018.583-8.32%2018.583-18.583V68zM202%2068h-22.671v112.912a4.088%204.088%200%20004.088%204.088C193.68%20185%20202%20176.68%20202%20166.417V68z%22%20fill%3D%22%23F4F4F4%22%2F%3E%3Cpath%20d%3D%22M63%2064c0-24.3%2019.7-44%2044-44h52c24.301%200%2044%2019.7%2044%2044v104.607c0%209.053-7.34%2016.393-16.393%2016.393a3.607%203.607%200%2001-3.607-3.607V74H83v94.607C83%20177.66%2075.66%20185%2066.607%20185A3.607%203.607%200%200163%20181.393V64z%22%20fill%3D%22%23FF488E%22%2F%3E%3Crect%20x%3D%2274%22%20y%3D%2252%22%20width%3D%22118%22%20height%3D%2236%22%20rx%3D%228%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.1%22%2F%3E%3Crect%20x%3D%2274%22%20y%3D%2250%22%20width%3D%22118%22%20height%3D%2236%22%20rx%3D%228%22%20fill%3D%22%23F4F4F4%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    title: "My Principal is the worse",
    _id: "2",
    body: "I hate coming here for the mere fact that my principal is not the best peron to deal with. She has been on my case daily for absolutely nothing.",
    author: "UnhappyUnicorn",
    timestamps: 'November 10, 2022'
  }
]
const Lounge = ({loggedInUser}) => {
  return (
    
    <div>
      <Navbar />
      <h1 style={{color:'red', textAlign:'center', fontSize:'55px'}}>The Teacher's Lounge</h1>
      <h2 class="post">Latest Lounge Post</h2>

    <section className="lounge-section">
      {lounges.map((lounge) => (
        <div className="card">
          <div style={{ padding:'8px', width: '100%', background: '', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing:'border-box'}}>
            <div style={{width: "100%", display: 'flex', flexDirection: "column", alignItems:"center", gap:'10px'}}>
              <img src={lounge.avatar} alt="users avatar" style={{borderRadius:"50%", height:'65px', background:'white'}}/>
              <h6 style={{color:'white', fontSize:"20px", textAlign:"left"}}>{lounge.author}</h6>
              <h2 style={{color:'white', fontSize:"10px"}}>{lounge.timestamps}</h2>
            </div>
        </div>

        <div style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <a href={`/lounge/${lounge._id}`} style={{ fontSize: 18, justifyContent:'center', padding: 0}}>
            {" "}
            <h2>{lounge.title}</h2>
          </a>
          <div >
              <p className="ellipsis">{lounge.body}</p>
          </div>
          
          {lounge.author === loggedInUser ? (
          <div style={{display: 'flex', gap: 10, width: '100%'}}>
            <form action={`/lounge/${lounge._id}?_method=DELETE`} method='POST'>
              <div className="parent-input-div">
                <input type='submit' value='Delete' className="delete-button"/>
              </div>
            </form>
            <div className="parent-input-div percent-100">
              <a href={`/blog/edit/${lounge._id}`} className="edit-button">Edit</a>
            </div>
          </div> 
            ) : null}
          </div>
      </div>
    ))}
    </section>

    </div>
    );
    }

export default Lounge