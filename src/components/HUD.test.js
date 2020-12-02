import React, { useState } from "react";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HUD from './HUD';

function HUDTestComponent() {
  /* HUD State */
  let [pressCount, setPressCount] = useState(0);
  let [HUDPosition, setHUDPosition] = useState("");
  let [defaultTab] = useState(false);
  let [activeTab, setActiveTab] = useState({
    econTab: false,
    demogTab: false,
    propsTab: false,
  });

  /* Objects with state values */

let HUDState = {
    pressCount,
    setPressCount,
    HUDPosition,
    setHUDPosition,
    activeTab,
    setActiveTab,
  };

  return(
    <BrowserRouter>
      <HUD defaultTab={defaultTab} HUDState={HUDState} />
    </BrowserRouter>
  );
}

describe("HUD", () => {
  test("renders HUD", () => {
    render(<HUDTestComponent />);
  });
});
