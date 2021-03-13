let arr = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|"]; 

let time = 100;
for (const item of arr){
  setTimeout(() => {
    process.stdout.write(item)}, time);
   time += 200;
};

