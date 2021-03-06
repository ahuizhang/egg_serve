'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 用户管理
 */

class HomeController extends Controller {

  /**
    * @summary 创建用户
    * @description  创建用户，记录用户账号/密码/类型
    * @router post /user/register
    * @request body createUserRequest *body
    * @response 200 baseResponse 创建成功
    */

  async index() {
    const { ctx, service } = this;
    ctx.validate(ctx.rule.createUserRequest);
    const payload = ctx.request.body || {};
    const res = await service.user.create(payload);
    ctx.helper.success({ ctx, res });
  }
}

module.exports = HomeController;
