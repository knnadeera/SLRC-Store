import React, { Fragment } from "react";
import classes from "./AvailableParts.module.css";
import PartItems from "./PartsItems/PartItems";

const DUMMY_PARTS = [
  {
    id: "m1",
    name: "T-Motor VELOX V2 V2207 Motor",
    description: "The new VELOX V2 motors by T-Motor",
    fullDescription:
      "Introducing the new VELOX V2 motors by T-Motor. The V2207 V2 motors come in a new and sleek design and are made with premium components to give your multirotor visibility and speed in the game! Great for freestyle and racing!",
    img: "https://slrcstore.com/wp-content/uploads/2021/09/1040_P_1606186946653.jpg",
    specifications: (
      <li>
        <h4>KV: 2550 (Ice Blue)</h4>
        <ul>Motor DimensionS: Φ27.5*31.35mm</ul>
        <ul> Lead: 20#AWG 150mm</ul>
        <ul> Shaft Diameter: 4mm</ul>
        <ul>Idle Current: 1.9A</ul>
        <ul>Max.Power (the 60s): 545W</ul>
        <ul>Weight (Excl. Cable): 34.3g</ul>
        <ul>Internal Resistance: 43mΩ</ul>
        <ul>Configuration: 12N14P</ul>
        <ul>Rated Voltage (Lipo): 4S</ul>
        <ul>Peak Current (60s): 38.6A</ul>
      </li>
    ),
    price: 22.99,
  },
  {
    id: "m2",
    name: "T-Motor T5143S Propeller 2 Pairs",
    description: "Get more with T-Motor’s T5143S Propellers!",
    fullDescription: "Get more with T-Motor’s T5143S Propellers! These durable props are stiffer and have greater thrust compare to the T-Motor T514. These props are extremely smooth, durable, and POPO compatible!   Ideal for freestyle and indoor racing.",
    img: "https://slrcstore.com/wp-content/uploads/2020/05/all-t5143s-300x300.jpg",
    specifications: <div><li><h4>Specifications</h4>
    <ul>Length: 5.1″</ul>
    <ul>Pitch: 4.3″</ul>
    <ul> Hub Thickness: 7mm</ul>
    <ul>Inner diameter: (Prop Mount) 5mm</ul>
    <ul> Usage: 5″ or greater frame</ul>
    <ul> Material: Polycarbonate</ul>
    <ul>Color: Clear Red, Clear Gray,  Clear Blue, Clear Orange, Jelly Green</ul>
    <ul> Weight: 4.1g</ul>
    <ul> POPO Compatible: Yes</ul>
    <h4>Includes</h4>
    <ul>2 x T5143 S CW Propellers</ul>
    <ul>2 x T5143 S CCW Propellers</ul></li></div>,
    price: 16.5,
  },
  {
    id: "m3",
    name: "T-Motor Velox V2 V45A 4-in-1 ESC",
    description: "The V45A 4-in-1 ESC V2 by T-Motor!",
    fullDescription:"The V45A 4-in-1 ESC V2 by T-Motor is inspired by the VELOX V2207.5 Motors! The V45A V2 MOS has been upgraded with a 15% performance increase to fly in confidence even during high-current spikes.The brand new cooling fin design makes heat dissipation more efficient and guarantees stable power output. Spacious motor pads make over-current ability stronger and welding easier.This ESC comes with an integrated 10V/2a BEC, great for providing power for the DJI Air Unit or other FPV equipment.",
    img: "https://slrcstore.com/wp-content/uploads/2021/04/yyyyyy.jpg",
    specifications:<div><li><h4>Specifications</h4>
    <ul>Model: V45A V2</ul>
    <ul>Current: 45A</ul>
    <ul>Peak Current: 55A (10s)</ul>
    <ul> BEC: 10V/2A</ul>
    <ul> Lipo: 3-6S</ul>
    <ul> Weight: 21g</ul>
    <ul> Size 44.6x41x7mm</ul>
    <ul> Mounting Hole: 30.5×30.5mm, M3</ul>
    <ul>  Parameter: BLHeliSuite32</ul>
    <ul> ESC Firmware: Tmotor_32Bit</ul>
    <ul> Application: 170-450 Drones</ul>
   <h4>Includes</h4>
    <ul> 1x T-Motor V45A 3-6S BLHeli_32 4-in-1 ESC V2</ul>
    <ul>  1x Capacitor</ul>
    <ul> 1x XT60 Pigtail</ul>
    <ul> 1x 10p Wiring Harness</ul></li></div>,
    price: 12.99,
  },
  {
    id: "m4",
    name: "T-Motor’s F7 Flight Controller",
    description: "T-Motor’s first F7 Flight Controller has arrived!",
    fullDescription:"T-Motor’s first F7 Flight Controller has arrived! Logical layout, designed to work seamlessly with the T-Motor F45 and F55 ESC.Using the DJI FPV System? Check out the T-Motor F7 HD FC instead, designed just for the DJI Air Unit.",
    img: "https://slrcstore.com/wp-content/uploads/2020/09/916_P_1568971280935-300x300.jpg",
    specifications:<li><h4>Specifications</h4>
    <ul>MCU: STMF722RET6</ul>
    <ul> Gyro: MPU6000</ul>
    <ul> Memory: 16M</ul>
    <ul> Input Voltage: 12v-25-2v (3-6S)</ul>
    <ul> BEC: 5V/2A</ul>
    <ul>Dimensions: 37mm x 37mm</ul>
    <ul> Mounting Holes: 30.5mm x 30.5mm</ul>
    <ul> Weight: 7.4g</ul>
    <ul> Firmware Target: TMOTORF7 (Betaflight)</ul></li>,
    price: 18.99,
  },
  {
    id: "m5",
    name: "CNHL 1500MAH 4S 100C LIPO",
    description: "The New CMHL Black Series LI-PO Battery!",
    img: "https://slrcstore.com/wp-content/uploads/2020/03/201906061612-500x500-1-300x300.jpg",
    specifications:<li>
      <h4>Specifications</h4>
      <ul>CAPACITY:	1500MAH</ul>
      <ul>VOLTAGE:	14.8V / 4-CELL / 4S1P</ul>
      <ul>DISCHARGE RATE:	100C CONTINUAL / 200C BURST</ul>
      <ul>CHARGE RATE:	5C MAX</ul>
      <ul>SIZE:	34X37X75MM</ul>
      <ul>WEIGHT:	183G (INCLUDING WIRE AND CONNECTOR)</ul>
      <ul>OUTPUT CONNECTOR:	XT60</ul>
    </li>,
    price: 18.99,
  },
];

const AvailableParts = (props) => {
  const partList = DUMMY_PARTS.map((part) => (
    <PartItems
      key={part.id}
      id={part.id}
      name={part.name}
      description={part.description}
      img={part.img}
      price={part.price}
      specifications={part.specifications}
      onClick={props.onClick}
    />
  ));

  return (
    <Fragment >
      <section className={classes.parts}>
        <ul>{partList}</ul>
      </section>
    </Fragment>
  );
};

export default AvailableParts;
