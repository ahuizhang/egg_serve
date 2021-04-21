'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
     * 创建用户
     * @param {*} payload
     * @return
     */

  async create(payload) {
    const { ctx } = this;
    payload.password = await ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }

  /**
    * 删除用户
    * @param {*} _id
    */

  async destroy(_id) {
    const { ctx } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user is not found');
    }
    return ctx.model.User.findByIdAndRemove(_id);
  }

  /**
    * 更新用户
    * @param {*} _id
    * @param {*} payload
    */

  async update(_id, payload) {
    const { ctx } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user is not found');
    }
    return ctx.model.User.findByIdAndUpdate(_id, payload);
  }

  /**
    * 查看单个用户
    * @param {*} _id
    */

  async show(_id) {
    const { ctx } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user is not found');
    }
    return ctx.model.User.findById(_id).populate('role');
  }


  /**
    * 根据手机查询
    * @param {*} mobile
    */

  async findByMobile(mobile) {
    return this.ctx.model.User.findOne({ mobile });
  }

}

module.exports = UserService;
