<template>
  <div>
    <el-dialog :title="info.istitle" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="width">
          <el-select v-model="form.pid" placeholder="请选择上级菜单">
            <el-option label="请选择" :value="0"></el-option>

            <el-option
              :label="item.catename"
              :value="item.id"
              v-for="item in cateList"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="分类名称" :label-width="width">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="width">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add()" v-if="info.isAdd">确 定</el-button>
        <el-button type="primary" @click="update()" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { reqcateAdd, reqcateListOne ,reqcateEdit } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      cateList: "cate/list"
    })
  },
  props: ["info"],
  data() {
    return {
      width: "160px",
      imageUrl: "",
      form: {
        pid: "",
        catename: "",
        status: 1,
        img: null
      },
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    changeImg(e) {
      console.log(e);
      var file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },

    empty() {
      this.form = {
        pid: "",
        catename: "",
        status: 1,
        img: null
      };
    },
    hide() {
      this.info.isShow = false;
    },
    add() {
      reqcateAdd(this.form).then(res => {
        this.empty();
        this.hide();
      });
    },
    ...mapActions({
      requestcateList: "cate/requestcateList"
    }),
    look(id) {
      reqcateListOne({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        this.imageUrl = this.$preImg + res.data.list.img;
      });
    },
    update() {
      reqcateEdit(this.form).then(res => {
        console.log(res);
        
        this.requestcateList();
        this.hide();
      });
    }
  },
  mounted() {
    this.requestcateList();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
