# powerapps-modals

#### [Documentation](https://viteapps.dev/series/powerapps-modals) | [Roadmap](https://viteapps.notion.site/Roadmap-9bb94375a6a84ec781aa803a52bc4ae0) 

![image](https://user-images.githubusercontent.com/83499142/189826069-0664ee76-7e94-4a7c-bc00-0976347fe543.png)

# Turn JSON into modals

```jsonc
  {
    "icon": "success",//warning //error
    "labels": [
      { "text": "Activation Succeeded", "type": "h1" },
      {
        "text": "Enter customer name and email to submit the request to the next stage",
        "type": "h2",
      },
    ],
    "inputs": [
      {
        "id": "customername", //used to get the value when the modal object is returned
        "label": "Customer Name",
      },
      {
        "id": "customeremail",
        "label": "Customer Email",
      },
    ],
    "buttons": [
      {
        "id": "button-cancel", //used to know what button was clicked, retunred with modal return object
        "label": "Cancel",
        "type": "white", //blue //red
      },
      {
        "id": "button-submit",
        "label": "Submit",
        "type": "blue",
      },
    ],
  }

```

![image](https://user-images.githubusercontent.com/83499142/189827990-c4bc43bf-40e1-4033-bc4d-e4201d87fa55.png)

# Why powerapps-modals?
![image](https://user-images.githubusercontent.com/83499142/189830933-f09313aa-1229-4d18-84bf-acfe3cb8f8b4.png)


# Steps
#### 1- [Download](https://github.com/ahmadnsam/powerapps-modals/releases) the solution in your environment 
#### 2- Prepare your modal json
```jsonc
  {
    "icon": "success",//warning //error
    "labels": [
      { "text": "Activation Succeeded", "type": "h1" },
      {
        "text": "Enter customer name and email to submit the request to the next stage",
        "type": "h2",
      },
    ],
    "inputs": [
      {
        "id": "customername", //used to get the value when the modal object is returned
        "label": "Customer Name",
      },
      {
        "id": "customeremail",
        "label": "Customer Email",
      },
    ],
    "buttons": [
      {
        "id": "button-cancel", //used to know what button was clicked, retunred with modal return object
        "label": "Cancel",
        "type": "white", //blue //red
      },
      {
        "id": "button-submit",
        "label": "Submit",
        "type": "blue",
      },
    ],
  }

```
#### 3- Write your script and pass the json to it
```javascript
  let pageInput: Xrm.Navigation.PageInputHtmlWebResource = {
    pageType: "webresource",
    webresourceName: "vite_/viteapps/pages/modals.html",
    data: JSON.stringify(modalJsonObject), //modalJsonObject, pass your json object here
  };
  let navigationOptions: Xrm.Navigation.NavigationOptions = {
    target: 2, // 2 is for opening the page as a dialog.
    width: 400, // default is px. can be specified in % as well.
    height: 500, // default is px. can be specified in % as well.
    position: 1, // Specify 1 to open the dialog in center; 2 to open the dialog on the side. Default is 1 (center).
    title: "Record activation modal", //recommended to enter title here
  };
  Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
    function success(returnedValues) {
      console.log(returnedValues);
      /*
        Return values object comes in the below format
        {
          inputs:object //holds the inputs and what the user filled them in with, you can get them by using the input id as the identifier
          clickedButton:string // the id of the button the user clicked
        }
        
        for the above example you can get your inputs like the below
      */
      let clickedButton = returnedValues.clickedButton; //if the user clicked on submit button it will return "button-submit"
      let customerName = returnedValues.inputs["customername"]; //returns what user filled in the customer name input
      let customerEmail = returnedValues.inputs["customeremail"]; //returns what user filled in the customer email input
    },
    function error(e) {
      // Handle errors
    }
  );
```

#### That's it!
