window.addEventListener('message', function (eventData) {
  let parsedEventData = JSON.parse(eventData.data);
  
  if (parsedEventData.event_code === "get_payload") {
    parent.postMessage(JSON.stringify({
      event_code: 'get_payload_parent',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "custom-recent-order-event") {
    parent.postMessage(JSON.stringify({
      event_code: 'custom-parenttoroot-recent-order-event',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "custom-select-option-1") {
    parent.postMessage(JSON.stringify({
      event_code: 'custom-parenttoroot-select-option-1',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "harga") {
    parent.postMessage(JSON.stringify({
      event_code: 'harga',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "elektronik_submit") {
    parent.postMessage(JSON.stringify({
      event_code: 'elektronik_submit',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "ele_nextForm") {
    parent.postMessage(JSON.stringify({
      event_code: 'ele_nextForm',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "leadsSuccess") {
    parent.postMessage(JSON.stringify({
      event_code: 'leadsSuccess',
      data: parsedEventData.data
    }), '*');
  }




  if (parsedEventData.event_code === "custom-parent-client-event" && parsedEventData.data) {
    console.log('custom-parent-client-Test Event child Iframe----', parsedEventData.data)
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'custom-child-client-event',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "pilihMerk" && parsedEventData.data) {
    console.log(parsedEventData.data, "pilihMerk data ===>")
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'pilihMerk',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "jangkaWaktu-parentIframe" && parsedEventData.data) {
    console.log(parsedEventData.data, "jangkaWaktu data ===>")
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'jangkaWaktu-childIframe',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "hitungAnda_parentIframe" && parsedEventData.data) {
    console.log('1-1--->')
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'hitungAnda-childIframe',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "submitLeads_parentIframe" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'submitLeads-childIframe',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "autofillPayload_data_parent" && parsedEventData.data) {
    console.log('sendAutofillWebview Event child Iframe----', parsedEventData.data)
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'autofill-payload-event',
      data: parsedEventData.data
    }), '*');
  }

  //comment 
});