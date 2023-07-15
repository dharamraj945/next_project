import Image from 'next/image'
import Main from './Main/page'

export default function Home() {

  const addData = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          name: "Kishan",
          email: "test@gmail.com",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addData();
  };
  addData();
  return (
    <>

      <Main />



    </>
  )
}



