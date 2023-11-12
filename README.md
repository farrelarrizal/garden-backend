# garden-watering-backend
1st Project of IOT Lecture

# How To Run
Make sure you have an active mongodb database URL and save it to `.env` file

```
DATABASE_URL = examplemongoconnectionurl/watering
```
And then you can initiate the project by using this

```
npm install
```
You can seed the database using function seeder that i made
```
npm run seed
```
Start the app using command below
```
npm run dev
```
    
**POST /api/watering**
----
  Creates a new watering action and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
  {
    deviceId: string
    status: string "on" | "off"
    videoId: string(timestamp)
  }
```
* **Headers**  
  Content-Type: application/json  
* **Code:** 200  
  **Content:**
  ```
  {
    "data": {
        "deviceId": 1,
        "status": "on",
        "createdAt": "2023-11-12T20:49:04.000Z",
        "_id": "6550d8213befbcbb919a189e",
        "__v": 0
    }
  }
  ``` 
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ failed : "Insufficient parameters" }`
