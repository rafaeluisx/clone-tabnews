function status(request, response) {
  response.status(200).json({ teste: "Hello There!" });
}

export default status;
