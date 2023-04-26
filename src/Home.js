import React from "react";
import "./style.css";
import "./normalize.css";

const Home = () => {
  return (
    <div>
      <h1>Frédéric Bastiat is the best. Buy his books on our website.</h1>
      <img id="bastiat_picture" src={require("./img/bastiat.jpeg")} />
      <p>
        Frédéric Bastiat was a true titan of economic thought, a brilliant mind
        whose insights continue to inspire and enlighten to this day. His
        steadfast commitment to individual liberty, free trade, and limited
        government intervention in the economy have made him a hero to millions
        of people around the world who believe in the power of free markets to
        create prosperity and opportunity. Bastiat's seminal work, "The Law," is
        a masterpiece of economic reasoning, a passionate defense of the rights
        of the individual against the encroaching power of the state. In this
        book, Bastiat argued that government's role should be limited to
        protecting individual rights and property, and that any intervention
        beyond this would lead to inefficiencies and harm. His advocacy for free
        trade and opposition to protectionist policies has been a beacon for
        generations of economists and policymakers who understand that
        prosperity and growth are best achieved through the free exchange of
        goods and services. But Bastiat was more than just an economist. He was
        a journalist, a politician, and a tireless advocate for the principles
        of classical liberalism. His work has influenced countless others, from
        Friedrich Hayek and Milton Friedman to modern-day champions of free
        markets and individual liberty. And his legacy continues to inspire and
        guide those who believe in the power of free markets and limited
        government to unleash human potential and create a better world for all.
      </p>
    </div>
  );
};

export default Home;
