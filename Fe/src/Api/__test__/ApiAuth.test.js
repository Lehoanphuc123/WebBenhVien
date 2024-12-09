import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { registerAccount } from "../Api.auth";

describe("registerAccount", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("register có gửi yêu cầu đến đúng path không", async () => {
    const body = { username: "testuser", password: "testpassword" };
    const response = { success: true };

    mock.onPost("/user/register", body).reply(200, response);

    const result = await registerAccount(body);

    expect(mock.history.post.length).toBe(1); // Kiểm tra nếu có một yêu cầu POST
    expect(mock.history.post[0].url).toBe("/user/register"); // Kiểm tra URL
    expect(mock.history.post[0].data).toBe(JSON.stringify(body)); // Kiểm tra body của yêu cầu

    expect(result.data).toEqual(response);
  });
});
