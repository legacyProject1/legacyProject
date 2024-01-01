"use client"
import React from 'react'
import SideBare from '../AdminSideBare/Page'
import { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { useEffect } from 'react';








interface ProductProps{
  id: number,
  name: string,
  price: number,
  images: string,
  description:string,
  category:string,
  createdAt:Date
};

interface UserProps{
  id: number,
  firstName: string,
  lastName: number,
  adress: string,
  email:string,
};

const Graph = () => {
  const [dat, setDat] = useState<UserProps[]>([]);
  const [dataa, setDataa] = useState<ProductProps[]>([]);
  const [user, setUser] = useState<UserProps[]>([]);
  const [admin, setAdmin] = useState<UserProps[]>([]);
  const [seller, setSeller] = useState<UserProps[]>([]);
  const [Tent ,setTent]= useState<ProductProps[]>([]);
  const [Sleeping ,setSleeping] = useState<ProductProps[]>([]);
  const [CampingPillow,setCampingPillow] = useState<ProductProps[]>([]);
  const [flashlights ,setFlashlights] = useState<ProductProps[]>([]);
  const [CampCh ,setCampCh] = useState<ProductProps[]>([]);
  const [CampTable ,setCampTable ] = useState<ProductProps[]>([]);
  const [Lantern ,setLantern] = useState(false);



  const data = [
    { label: 'Tent', value: dataa.length },
    { label: 'Sleeping bags', value: 300 },
    { label: 'Camping pillow', value: 300 },
    { label: 'flashlights', value: 200 },
    { label: 'Camp chairs', value: 278 },
    { label: 'Camp table', value: 189 },
    { label: 'Lantern', value: 189 },

  ];

  useEffect(() => {
    axios
      .get('http://localhost:3000/client/getAllProduct')
      .then((res) => {
        const Dataa: ProductProps[] = res.data;
        setDataa(Dataa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/admin/getAllClients')
      .then((res) => {
        setDat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // const filterUser = (dataa:UserProps[]) => {
  //   // Use setDataa to update the state of user
  //   setUser(dataa.filter((row) => row.role === 'seller'));
  // };
 
  // const filterUser = (dataa: UserProps[]) => {
  //   return setUser(dataa.filter((row) => row.role === 'user'));
  // };

  // const filterAdmin = (dataa: UserProps[]) => {
  //   return setAdmin(dataa.filter((row) => row.role === 'admin'));
  // };

  // const filterSeller = (dataa: UserData[]) => {
  //   return setSeller(dataa.filter((row) => row.role === 'seller'));
  // };
  // // ('Tent','Sleeping bags','Camping pillow','flashlights','Camp chairs','Camp table','Lantern')
  // const filterPhones = (dat: ProductProps[]) => {
  //   return setTent(dat.filter((row) => row.category === 'Tent'));
  // };

  // const filtreComputer = (dat: ProductProps[]) => {
  //   return setSleeping(dat.filter((row) => row.category === 'Sleeping bags'));
  // };

  // const filtreSm = (dat: ProductProps[]) => {
  //   return setCampingPillow(dat.filter((row) => row.category === 'Camping pillow'));
  // };

  // const filtreCam = (dat: ProductProps[]) => {
  //   return setFlashlights(dat.filter((row) => row.category === 'flashlights'));
  // };

  // const filterHead = (dat: ProductProps[]) => {
  //   return setCampCh(dat.filter((row) => row.category === 'Camp chairs'));
  // };
  // const filterHead = (dat: ProductProps[]) => {
  //   return setCampTable(dat.filter((row) => row.category === 'Camp table'));
  // };
  // const fltr = (dat: ProductProps[]) => {
  //   return setLantern(dat.filter((row) => row.category === 'Lantern'));
  // };
 

  // function appelerFonctions() {
  //   filterAdmin(dataa);
  //   filterSeller(dataa);
  //   filterUser(dataa);
  //   filterPhones(dat);
  //   filtreComputer(dat);
  //   filtreSm(dat);
  //   filtreCam(dat);
  //   filterHead(dat);
  //  fltr(dat)
  // }


  return (
    <div className="flex-row lg:flex">
     <SideBare/> 
     <div className="container mx-auto mt-4 lg:mt-12">
      <button >test</button>
      <PieChart
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          data,
        },
      ]}
      height={300}
    />
      </div>
  </div>
   
  )
}

export default Graph

