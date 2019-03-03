import axios from "axios";

export function getExpressionsData() {
  axios.get("/api/python/expression").then(res => {
    return res.data;
  });
}

export function getConditionalsData() {
  axios.get("/api/python/conditionals").then(res => {
    return res.data;
  });
}

export function getKeywordsData() {
  axios.get("/api/python/keywords").then(res => {
    return res.data;
  });
}

export function getLoopsData() {
  axios.get("/api/python/loops").then(res => {
    return res.data;
  });
}

export function getStringsData() {
  axios.get("/api/python/strings").then(res => {
    return res.data;
  });
}

export function getVariablesData() {
  axios.get("/api/python/strings").then(res => {
    return res.data;
  });
}

export function getWhileData() {
  axios.get("/api/python/while").then(res => {
    return res.data;
  });
}
