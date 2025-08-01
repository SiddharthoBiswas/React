import React from "react";
import styled from "styled-components";
import '../App.css';

import t from '../assets/images/tumling.jpg';
import m from '../assets/images/mee.jpg';
import me from '../assets/images/meghma.jpg';
import n from '../assets/images/namthing.jpg';

const Divide = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  background-color: lightblue;
  color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.65);// Box shadow for depth
  ${'' /* transition: transform 0.2s; // Smooth transition for hover effect */}
`;

const Prev = styled.div`
  background-color: navy;
  color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Style = () => {
  return (
    <Divide>
      <Card>
        <img src={t} alt="Tumling" height="100px" width="100px" />
        <p><b>Tumling</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
          <li>Indo-Nepal Border</li>
            <li>Hamlet in Nepal</li>
        </ul>
      </Card>

      <Card>
        <img src={m} alt="Sandakphu" height="100px" width="100px" />
        <p><b>Sandakphu</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
          <li>District: Darjeeling</li>
          <li>State: West Bengal</li>
        </ul>
      </Card>

      <Card>
        <img src={me} alt="Meghma" height="100px" width="100px" />
        <p><b>Meghma</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
          <li>India-Nepal border</li>
          <li>Under Singhalila National Park</li>
        </ul>
      </Card>

      <Card>
        <img src={n} alt="Namthing-Pokhri" height="100px" width="100px" />
        <p><b>Namthing-Pokhri</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
          <li>West Bengal</li>
          <li>Darjeeling district</li>
        </ul>
      </Card>
    </Divide>
  );
};

const Text = () => {
  return (
    <Prev>
      <h4>2nd International Conference</h4>
      <h2>
        INTERNATIONAL CONFERENCE ON ADVANCES IN CHEMICAL AND MATERIALS SCIENCE
      </h2>
    </Prev>
  );
};

export { Style, Text };
