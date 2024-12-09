import { describe, expect, it } from "vitest";
import { HeaderRoutes } from "../HeaderRouter";
// Cập nhật đúng đường dẫn tới module của bạn

describe("HeaderRoutes", () => {
  it("nên có số lượng tuyến đường chính xác", () => {
    expect(HeaderRoutes.length).toBe(4);
  });

  it("nên có lộ trình chính xác cho Trang chủ", () => {
    const route = HeaderRoutes.find((route) => route.id === 1);
    expect(route).toEqual({
      id: 1,
      title: "Trang chủ",
      path: "/",
    });
  });

  it("nên có lộ trình chính xác cho bệnh viện", () => {
    const route = HeaderRoutes.find((route) => route.id === 2);
    expect(route).toEqual({
      id: 2,
      title: "bệnh viện",
      path: "/benhvien",
    });
  });

  it("nên có lộ trình chính xác cho quản lý khoa", () => {
    const route = HeaderRoutes.find((route) => route.id === 3);
    expect(route).toEqual({
      id: 3,
      title: "quản lý khoa",
      path: "/qlkhoa",
    });
  });

  it("nên có lộ trình chính xác cho quản lý thu ngân", () => {
    const route = HeaderRoutes.find((route) => route.id === 4);
    expect(route).toEqual({
      id: 4,
      title: "quản lý thu ngân",
      path: "/thungan",
    });
  });
});
