module Index.Api.V1.Tests

open FSharp.Control
open System.Net
open TestApi
open Xunit

let ``GET /api/v1/section should return 401`` () =
  task {
    let api = Dependencies.Server.CreateClient()
    let! response = api.GetAsync("/api/v1/section")
    Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode)
  }

[<Fact>]
let ``GET /api/v1/section/ should return 401`` () =
  task {
    let api = Dependencies.Server.CreateClient()
    let! response = api.GetAsync("/api/v1/section/")
    Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode)
  }

[<Fact>]
let ``GET /api/v1/section/intro should return 401`` () =
  task {
    let api = Dependencies.Server.CreateClient()
    let! response = api.GetAsync("/api/v1/section/intro")
    Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode)
  }

[<Fact>]
let ``GET /api/v1/section/asd should return 401`` () =
  task {
    let api = Dependencies.Server.CreateClient()
    let! response = api.GetAsync("/api/v1/section/asd")
    Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode)
  }